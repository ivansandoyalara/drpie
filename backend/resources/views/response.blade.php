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
                <td><span>Teléfono</span></td>
                <td>{{ $visitor->phone }}</td>
            </tr>
            <tr>
                <td><span>Huella</span></td>
                <td>{{ $visitor->footprint }}</td>
            </tr>
            <tr>
                <td><span>Visitas realizadas</span></td>
                <td>{{ $visitor->visits }}</td>
            </tr>
            <tr>
                <td><span>Punto de venta</span></td>
                <td>{{ $visitor->branch->name }}</td>
            </tr>
            <tr>
                <td><span>Vendedor</span></td>
                <td>{{ $visitor->employee->name }}</td>
            </tr>
            @foreach($visitor->responses as $response)
                <tr>
                    <td><span>{{ $response->question }}</span></td>
                    <td>{{ $response->response }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</div>
