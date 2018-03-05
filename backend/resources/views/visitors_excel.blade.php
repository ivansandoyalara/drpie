<meta charset="utf-8" />
<h3>Título</h3>

<table>
    <thead>
        <tr>
            <th>Fecha</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Pto. Venta</th>
            <th>Vendedor</th>
        </tr>
    </thead>
    <tbody>
        @foreach($visitors as $visitor)
            <tr>
                <td>{{ substr($visitor->created_at, 0, 10) }}</td>
                <td>{{ $visitor->name.' '.$visitor->surname }}</td>
                <td>{{ $visitor->email }}</td>
                <td>{{ $visitor->branch->name }}</td>
                <td>{{ $visitor->employee->name }}</td>
            </tr>
        @endforeach
    </tbody>
</table>
