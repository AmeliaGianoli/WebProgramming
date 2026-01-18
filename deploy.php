<?php
// Path to your repository
$repo_path = '/home/your_user/public_html/your_project';
// Pull latest changes
exec("cd {$repo_path} && git pull origin main", $output);
// Log output (optional)
file_put_contents('deploy.log', implode("\n", $output));
echo "Deployment Successful!";
?>
