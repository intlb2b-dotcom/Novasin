='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';
=@{Authorization='Bearer '+; Accept='application/vnd.github+json'};
=@{source=@{branch='gh-pages'; path='/'}} | ConvertTo-Json;
Invoke-RestMethod -Uri 'https://api.github.com/repos/intlb2b-dotcom/Novosin/pages' -Method Put -Headers  -Body  | ConvertTo-Json
