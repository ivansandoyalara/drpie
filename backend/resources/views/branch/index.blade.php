@extends('template')

@section('title', 'Puntos de venta')

@section('content')
<div class="card-header">
    <h4 class="card-title">Puntos de Venta</h4>
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
                        <button type="button" class="btn btn-primary" onclick="window.location = '{{ URL::to('branches/create') }}'">NUEVO</button>
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
                @foreach($branches as $branch)
                <tr>
                    <td>
                        {{ $branch->name }}
                    </td>
                    <td>
                        <input type="checkbox" @if($branch->status == '1') checked @endif data-toggle="toggle" data-size="small" onchange="updateStatus('{{ URL::to('branches/'.$branch->id.'/status') }}', this);">
                    </td>
                    <td>
                        <a href="{{ URL::to('branches/'.$branch->id.'/edit') }}">Editar</a>
                    </td>
                    <td>
                        <form action="{{ URL::to('branches/'.$branch->id) }}" method="POST" id="df{{ $branch->id }}" class="delete-form">
                            {{ csrf_field() }}
                            {{ method_field('DELETE') }}
                            <a onclick="deleteElement('df{{ $branch->id }}');">Eliminar</a>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="4" class="text-right">
                        <span>{{ $branches->total() }} ítem(s)</span>
                        {{ $branches->links() }}
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</div>
@endsection