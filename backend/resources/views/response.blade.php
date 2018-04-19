<div class="table-responsive">
    <table class="table">
        <tbody>
            <tr>
                <td><span>Fecha</span></td>
                <td>{{ $visitor->created_at }}</td>
            </tr>
            <tr>
                <td><span>Nombre</span></td>
                <td>{{ $visitor->name." ".$visitor->surname }}</td>
            </tr>
            <tr>
                <td><span>Cédula</span></td>
                <td>{{ $visitor->legal_id }}</td>
            </tr>
            <tr>
                <td><span>Email</span></td>
                <td>{{ $visitor->email }}</td>
            </tr>
            <tr>
                <td><span>Género</span></td>
                <td>{{ $visitor->gender }}</td>
            </tr>
            <tr>
                <td><span>Tipo de pisada</span></td>
                <td>
                    {{ $visitor->footprint }}
                    @if($visitor->footprint == '0')
                        Pie cavo
                    @elseif($visitor->footprint == '1')
                        Pie medio
                    @elseif($visitor->footprint == '2')
                        Pie plano
                    @endif
                </td>
            </tr>
            <tr>
                <td><span>Visitas realizadas</span></td>
                <td>{{ $visitor->visits }}</td>
            </tr>
            <tr>
                <td><span>Punto de venta</span></td>
                <td>{{ $visitor->branch->name }}</td>
            </tr>
            @if(count($visitor->employee) > 0)
            <tr>
                <td><span>Vendedor</span></td>
                <td>{{ $visitor->employee->name }}</td>
            </tr>
            @endif
            @foreach($visitor->responses as $response)
                <tr>
                    <td><span>{{ $response->question }}</span></td>
                    <td>{{ $response->response }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</div>
