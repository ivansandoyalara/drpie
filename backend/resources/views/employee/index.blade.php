@extends('template')

@section('title', 'Vendedores')

@section('content')
<div class="card-header">
    <h4 class="card-title">Vendedores</h4>
</div>
<div class="card-body">
    <div class="row">
        <div class="col-md-12">
            <form action="" method="GET" class="crud-form">
                <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label">Nombre</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" name="name" id="name" placeholder="Nombre" value="{{ $name }}">
                    </div>
                    <div class="col-sm-3">
                        <button type="submit" class="btn btn-default">BUSCAR</button>
                        <button type="button" class="btn btn-primary" onclick="window.location = '{{ URL::to('employees/create') }}'">NUEVO</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    @if(session('ok'))
    <div class="alert alert-success" role="alert">
        <button type="button" aria-hidden="true" class="close" data-dismiss="alert">
            <i class="now-ui-icons ui-1_simple-remove"></i>
        </button>
        <span><b>Transacción exitosa</b></span>
    </div>
    @endif
    @if(session('error'))
    <div class="alert alert-danger" role="alert">
        <button type="button" aria-hidden="true" class="close" data-dismiss="alert">
            <i class="now-ui-icons ui-1_simple-remove"></i>
        </button>
        <span><b>Error al procesar transacción</b></span>
    </div>
    @endif
    <div class="table-responsive">
        <table class="table">
            <thead class=" text-primary">
                <th>
                    Nombre
                </th>
                <th>
                    Código
                </th>
                <th>
                    Status
                </th>
                <th>
                    Editar
                </th>
                <th>
                    Eliminar
                </th>
            </thead>
            <tbody>
                @foreach($employees as $employee)
                <tr>
                    <td>
                        {{ $employee->name }}
                    </td>
                    <td>
                        {{ $employee->code }}
                    </td>
                    <td>
                        <input type="checkbox" @if($employee->status == '1') checked @endif data-toggle="toggle" data-size="small" onchange="updateStatus('{{ URL::to('employees/'.$employee->id.'/status') }}', this);">
                    </td>
                    <td>
                        <a href="{{ URL::to('employees/'.$employee->id.'/edit') }}">Editar</a>
                    </td>
                    <td>
                        <form action="{{ URL::to('employees/'.$employee->id) }}" method="POST" id="df{{ $employee->id }}" class="delete-form">
                            {{ csrf_field() }}
                            {{ method_field('DELETE') }}
                            <a onclick="deleteElement('df{{ $employee->id }}');">Eliminar</a>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5" class="text-right">
                        <span>{{ $employees->total() }} ítem(s)</span>
                        {{ $employees->links() }}
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</div>
@endsection