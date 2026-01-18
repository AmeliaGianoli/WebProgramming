<?php
// Path to your repository
$repo_path = 'C:\Users\board\OneDrive - Western Wisconsin Technical College\3 Spring 2026\2 Web Programming II\web2';
// Pull latest changes
exec("cd {$repo_path} && git pull origin main", $output);
// Log output (optional)
file_put_contents('deploy.log', implode("\n", $output));
echo "Deployment Successful!";
?>
