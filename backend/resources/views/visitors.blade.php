@extends('template')

@section('title', 'Visitantes')

@section('content')
<div class="card-header">
    <h4 class="card-title"> Visitantes</h4>
</div>
<div class="card-body">
    <div class="row">
        <div class="col-md-12">
            <form action="" method="GET" class="crud-form" id="visitors_form">
                <div class="form-group row">
                    <label for="name_email" class="col-sm-2 col-form-label">Nombre/Email</label>
                    <div class="col-sm-4">
                        <input type="text" class="form-control" name="name_email" id="name_email" placeholder="Nombre/Email" value="{{ $name_email }}">
                    </div>
                    <label for="branch_id" class="col-sm-2 col-form-label">Pto. Venta</label>
                    <div class="col-sm-3">
                        <select name="branch_id" id="branch_id" class="form-control">
                            <option value="">- TODOS -</option>
                            @foreach($branches as $branch)
                            <option value="{{ $branch->id }}"
                                @if($branch->id == $branch_id) selected @endif
                                >{{ $branch->name }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="since" class="col-sm-2 col-form-label">Rango de fecha</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control datepicker" name="since" id="since" placeholder="Fecha desde" value="{{ $since }}" data-provide="datepicker" readonly>
                    </div>
                    <div class="col-sm-3">
                        <input type="text" class="form-control datepicker" name="until" id="until" placeholder="Fecha hasta" value="{{ $until }}" data-provide="datepicker" readonly>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="since" class="col-sm-2 col-form-label">Email confirmado</label>
                    <div class="col-sm-3">
                        <select name="status" id="status" class="form-control">
                            <option value="1" @if($status == '1') selected @endif>Solo confirmados</option>
                            <option value="" @if($status == '') selected @endif>- TODOS -</option>
                        </select>
                    </div>
                    <div class="col-sm-3">
                        <button type="button" class="btn btn-default" onclick="search();">BUSCAR</button>
                        @if(\Auth::user()->role == '1')
                        <button type="button" class="btn btn-success" onclick="generateExcel();"><span class="now-ui-icons arrows-1_cloud-download-93"></span> EXCEL</button>
                        @endif
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="table-responsive visitors">
        <table class="table">
            <thead class=" text-primary">
                <th>
                    Fecha
                </th>
                <th>
                    Nombre
                </th>
                <th>
                    Email
                </th>
                <th>
                    Pto. Venta
                </th>
                <th>
                    Respuestas
                </th>
            </thead>
            <tbody>
                @foreach($visitors as $visitor)
                <tr>
                    <td>
                        {{ substr($visitor->created_at, 0, 10) }}
                    </td>
                    <td>
                        {{ $visitor->name." ".$visitor->surname }}
                    </td>
                    <td>
                        {{ $visitor->email }}
                    </td>
                    <td>
                        {{ $visitor->branch->name }}
                    </td>
                    <td>
                        <a onclick="viewResponses('{{ $visitor->id }}');">Ver respuestas</a>
                    </td>
                </tr>
                @endforeach
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5" class="text-right">
                        <span>{{ $visitors->total() }} ítem(s)</span>
                        {{ $visitors->links() }}
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</div>

<iframe src="" frameborder="0" id="excel" style="display: none;"></iframe>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true" id="responses_modal">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Ver respuestas</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    Cargando...
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">CERRAR</button>
            </div>
        </div>
    </div>
</div>

@endsection
