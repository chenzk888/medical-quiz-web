# Split a MONOLITHIC questions.js (window.questions = [ ... ];) into questions/<examType>/questions.js.
# Root questions.js after migration is a merge stub — restore a single-file backup before re-running.
# UTF-8; bracket-aware (double-quoted strings; \ escapes).
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$src = Join-Path $root 'questions.js'
$utf8 = [System.Text.UTF8Encoding]::new($false)
$raw = [System.IO.File]::ReadAllText($src, $utf8)

if ($raw -notmatch '(?s)window\.questions\s*=\s*\[(.*)\]\s*;') {
  throw 'Could not find window.questions = [ ... ];'
}
$inner = $matches[1]

function Get-TopLevelObjects {
  param([string]$s)
  $objs = [System.Collections.Generic.List[string]]::new()
  $i = 0
  $len = $s.Length
  while ($i -lt $len) {
    while ($i -lt $len -and [char]::IsWhiteSpace($s[$i])) { $i++ }
    if ($i -ge $len) { break }
    if ($s[$i] -eq ',') { $i++; continue }
    if ($s[$i] -ne '{') {
      $i++
      continue
    }
    $depth = 0
    $start = $i
    for (; $i -lt $len; $i++) {
      $c = $s[$i]
      if ($c -eq '"') {
        $i++
        while ($i -lt $len) {
          if ($s[$i] -eq '\' -and ($i + 1) -lt $len) { $i += 2; continue }
          if ($s[$i] -eq '"') { break }
          $i++
        }
        continue
      }
      if ($c -eq '{') { $depth++ }
      elseif ($c -eq '}') {
        $depth--
        if ($depth -eq 0) {
          $i++
          $objs.Add($s.Substring($start, $i - $start).Trim())
          break
        }
      }
    }
  }
  return $objs
}

$objects = Get-TopLevelObjects $inner
$byType = [ordered]@{}

foreach ($obj in $objects) {
  if ($obj -notmatch 'examType:\s*"([^"]+)"') {
    throw "Object missing examType: $($obj.Substring(0, [Math]::Min(80, $obj.Length)))..."
  }
  $t = $matches[1]
  if (-not $byType.Contains($t)) {
    $byType[$t] = [System.Collections.Generic.List[string]]::new()
  }
  $byType[$t].Add($obj)
}

# ASCII-only header avoids encoding issues when .ps1 is not UTF-8 with BOM.
$header = @'
/**
 * Question bank shard (UTF-8). Field docs: root questions.js.
 */
'@

foreach ($exam in $byType.Keys) {
  $list = $byType[$exam]
  $dir = Join-Path (Join-Path $root 'questions') $exam
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
  $body = ($list -join ",`n`n")
  $out = @"
$header
window._questionParts = window._questionParts || {};
window._questionParts["$exam"] = [
$body
];
"@
  $dest = Join-Path $dir 'questions.js'
  [System.IO.File]::WriteAllText($dest, $out, $utf8)
  Write-Host "Wrote $($list.Count) -> $dest"
}

Write-Host "Done. Types: $($byType.Keys -join ', ')"
