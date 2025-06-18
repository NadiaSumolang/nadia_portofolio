<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio | Nadia Sumolang</title>

    <!-- ✅ Logo (favicon) -->
    <link rel="icon" href="/images/logo.png" type="image/png">

    <!-- ✅ Google Fonts & Font Awesome -->
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- ✅ CSS langsung pakai path absolut -->
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>

    @include('layouts.header')
    
    <main>
        @yield('content') {{-- Ini tempat konten dari home.blade.php masuk --}}
    </main>
    
    @include('layouts.footer')

    <!-- ✅ JS langsung pakai path absolut -->
    <script src="/js/script.js"></script>

</body>
</html>
