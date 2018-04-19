@extends('emails.template')

@section('content')
    <p>Hola! hemos registrado tu evaluación de pisada exitosamente, muchas gracias por confiar en nosotros.</p>
    <br>
    <p><b>Nombres:</b> {{ $visitor->name." ".$visitor->surname }}</p>
    <p><b>Local:</b> {{ $visitor->branch->name }}</p>
    @if(count($visitor->employee) > 0)
        <p><b>Vendedor:</b> {{ $visitor->employee->name }}</p>
    @endif
    <br>
    <p>Por favor ingresa al siguiente <b><a href="#">enlace</a></b> para acceder a tu evaluación de pisada,
    también podrás encontrar las recomendaciones que te podemos brindar como especialistas en el cuidado de tus pies.</p>
    <br>
    <p>Atentamente,</p>
    <p><b>Tus amigos de Dr. Pie</b></p>
@endsection