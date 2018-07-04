<meta charset="utf-8" />
<h3>Visitantes</h3>

<table>
    <thead>
        <tr>
            <th>Fecha</th>
            <th>Cédula</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Género</th>
            <th>Teléfono</th>
            <th>Tipo de pisada</th>
            <th>Pto. Venta</th>
            <th>Cod. Vendedor</th>
            <th>Vendedor</th>
        </tr>
    </thead>
    <tbody>
        @foreach($visitors as $visitor)
            <tr>
                <td>{{ substr($visitor->created_at, 0, 10) }}</td>
                <td>{{ $visitor->legal_id }}</td>
                <td>{{ $visitor->name }}</td>
                <td>{{ $visitor->surname }}</td>
                <td>{{ $visitor->email }}</td>
                <td>
                    @if($visitor->gender == '0')
                    Masculino
                    @else
                    Femenino
                    @endif
                </td>
                <td>{{ $visitor->phone }}</td>
                <td>
                    @if($visitor->footprint == '0')
                        Pie cavo
                    @elseif($visitor->footprint == '1')
                        Pie medio
                    @elseif($visitor->footprint == '2')
                        Pie plano
                    @endif
                </td>
                <td>{{ $visitor->branch->name }}</td>
                @if(count($visitor->employee) > 0)
                    <td>{{ $visitor->employee->code }}</td>
                    <td>{{ $visitor->employee->name }}</td>
                @else
                    <td>N/A</td>
                    <td>N/A</td>
                @endif
            </tr>
        @endforeach
    </tbody>
</table>
