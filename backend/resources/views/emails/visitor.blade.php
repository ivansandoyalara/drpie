@extends('emails.template')

@section('content')
    <h3>Visitante almacenado exitosamente</h3>
    <p>Nombres: {{ $visitor->name." ".$visitor->surname }}</p>
    <p>Local: {{ $visitor->branch->name }}</p>
    @if(count($visitor->employee))
        <p>Vendedor: {{ $visitor->employee->name }}</p>
    @endif
    @foreach($visitor->responses as $response)
        <p><b>{{ $response->question }}: </b>{{ $response->response }}</p>
    @endforeach
@endsection