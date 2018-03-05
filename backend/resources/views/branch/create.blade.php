@extends('template')

@section('title', 'Puntos de venta')

@section('content')
<div class="card-header">
    <h4 class="card-title">Crear punto de venta</h4>
</div>
<div class="card-body">
    <div class="row">
        <div class="col-md-12">
            <form action="{{ URL::to('branches') }}" method="POST" class="insert-edit-form">
                {{ csrf_field() }}
                <div class="form-group row">
                    <label for="name" class="col-sm-3 col-form-label">Nombre</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" name="name" id="name" placeholder="Nombre" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <button type="submit" class="btn btn-primary">GUARDAR</button>
                        <button type="button" class="btn btn-default" onclick="exitForm('{{ URL::to('branches') }}');">CANCELAR</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection