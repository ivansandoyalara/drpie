@extends('template')

@section('title', 'Vendedores')

@section('content')
<div class="card-header">
    <h4 class="card-title">Crear vendedor</h4>
</div>
<div class="card-body">
    <div class="row">
        <div class="col-md-12">
            @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
            @endif
            <form action="{{ URL::to('employees') }}" method="POST" class="insert-edit-form">
                {{ csrf_field() }}
                <div class="form-group row">
                    <label for="name" class="col-sm-3 col-form-label">Nombre</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" name="name" id="name" placeholder="Nombre" required value="{{ old('name') }}">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="code" class="col-sm-3 col-form-label">Código</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" name="code" id="code" placeholder="Código" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <button type="submit" class="btn btn-primary">GUARDAR</button>
                        <button type="button" class="btn btn-default" onclick="exitForm('{{ URL::to('employees') }}');">CANCELAR</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection