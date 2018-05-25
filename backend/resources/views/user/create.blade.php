@extends('template')

@section('title', 'Administradores')

@section('content')
<div class="card-header">
    <h4 class="card-title">Crear administrador</h4>
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
            <form action="{{ URL::to('users') }}" method="POST" class="insert-edit-form">
                {{ csrf_field() }}
                <div class="form-group row">
                    <label for="name" class="col-sm-3 col-form-label">Nombre</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" name="name" id="name" placeholder="Nombre" required value="{{ old('name') }}">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="email" class="col-sm-3 col-form-label">Email</label>
                    <div class="col-sm-8">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Email" required value="{{ old('email') }}">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="password" class="col-sm-3 col-form-label">Contraseña</label>
                    <div class="col-sm-8">
                        <input type="password" class="form-control" name="password" id="password" placeholder="Contraseña" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="password2" class="col-sm-3 col-form-label">Confirmar contraseña</label>
                    <div class="col-sm-8">
                        <input type="password" class="form-control" name="password2" id="password2" placeholder="Confirmar contraseña" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="role" class="col-sm-3 col-form-label">Rol</label>
                    <div class="col-sm-8">
                        <select name="role" id="role" class="form-control" required>
                            <option value="1">Administrativo</option>
                            <option value="2">Punto de venta</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <button type="submit" class="btn btn-primary">GUARDAR</button>
                        <button type="button" class="btn btn-default" onclick="exitForm('{{ URL::to('users') }}');">CANCELAR</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection