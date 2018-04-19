<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dr. Pie</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            font-family: Arial, Helvetica, sans-serif;
        }

        .wrapper {
            max-width: 700px;
            margin: 0 auto;
        }

        .header {
            padding: 20px;
            background-color: #fa0f0c;
        }

        .header img {
            width: 100px;
        }

        .header span {
            color: white;
        }

        .content {
            padding: 40px;
            background-color: white;
            line-height: 22px;
            font-size: 14px;
            color: #4f4f4f;
        }

        .content a {
            color: #e29700;
        }

        .footer {
            padding: 20px;
            background-color: #f4f4f4;
            font-size: 12px;
            color: #606060;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="header">
            <img src="{{ $message->embed(asset('/img/logo.png')) }}" alt="Dr. Pie logo">
            <span>Dr. Pie - Calzado Alemán</span>
        </div>
        <div class="content">
            @yield('content')
        </div>
        <div class="footer">
            Mensaje enviado automáticamente por Dr. Pie <br>
            Todos los derechos reservados &copy;{{ date('Y') }} 🌟
        </div>
    </div>
</body>
</html>