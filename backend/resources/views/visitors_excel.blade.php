<meta charset="utf-8" />
<h3>Visitantes</h3>

<table>
    <thead>
        <tr>
            <th>Fecha</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Pto. Venta</th>
            <th>Cod. Vendedor</th>
            <th>Vendedor</th>
        </tr>
    </thead>
    <tbody>
        @foreach($visitors as $visitor)
            <tr>
                <td>{{ substr($visitor->created_at, 0, 10) }}</td>
                <td>{{ $visitor->name }}</td>
                <td>{{ $visitor->surname }}</td>
                <td>{{ $visitor->email }}</td>
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
