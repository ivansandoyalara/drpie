<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>Dr. Pie | @yield('title')</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
    <!--     Fonts and icons     -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
    <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
    <!-- CSS Files -->
    <link href="{{ asset('/css/bootstrap.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('/css/now-ui-dashboard.css?v=1.0.0') }}" rel="stylesheet" />
    <link href="{{ asset('/css/backend.css') }}" rel="stylesheet" />
    <link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
    <link href="{{ asset('/css/bootstrap-datepicker.min.css') }}" rel="stylesheet">
</head>

<body class="">
    <div class="wrapper ">
        <div class="sidebar" data-color="orange">
            <!--
        Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow"
    -->
            <div class="logo" style="text-align: center;">
                <a href="{{ URL::to('visitors') }}" class="simple-text logo-normal">
                    <img src="{{ asset('./img/logo.png') }}" alt="Dr. Pie" style="width: 70%;"/>
                </a>
            </div>
            <div class="sidebar-wrapper">
                <ul class="nav">
                    <li @if(Request::path() == 'visitors') class="active" @endif>
                        <a href="{{ URL::to('visitors') }}">
                            <i class="now-ui-icons emoticons_satisfied"></i>
                            <p>VISITANTES</p>
                        </a>
                    </li>
                    <li @if(Request::path() == 'branches') class="active" @endif>
                        <a href="{{ URL::to('branches') }}">
                            <i class="now-ui-icons shopping_shop"></i>
                            <p>PTOS. VENTA</p>
                        </a>
                    </li>
                    <li @if(Request::path() == 'employees') class="active" @endif>
                        <a href="{{ URL::to('employees') }}">
                            <i class="now-ui-icons business_badge"></i>
                            <p>VENDEDORES</p>
                        </a>
                    </li>
                    <li @if(Request::path() == 'questions') class="active" @endif>
                        <a href="{{ URL::to('questions') }}">
                            <i class="now-ui-icons design_bullet-list-67"></i>
                            <p>FORMULARIO</p>
                        </a>
                    </li>
                    <li @if(Request::path() == 'users') class="active" @endif>
                        <a href="{{ URL::to('users') }}">
                            <i class="now-ui-icons users_single-02"></i>
                            <p>ADMINISTRADORES</p>
                        </a>
                    </li>
                    <li>
                        <a href="{{ URL::to('logout') }}">
                            <i class="now-ui-icons objects_spaceship"></i>
                            <p>SALIR</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main-panel">
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg navbar-transparent  navbar-absolute bg-primary fixed-top">
                <div class="container-fluid">
                    <div class="navbar-wrapper">
                        <div class="navbar-toggle">
                            <button type="button" class="navbar-toggler">
                                <span class="navbar-toggler-bar bar1"></span>
                                <span class="navbar-toggler-bar bar2"></span>
                                <span class="navbar-toggler-bar bar3"></span>
                            </button>
                        </div>
                        <a class="navbar-brand" href="{{ URL::to('visitors') }}">EVALUACIÓN DE PISADAS</a>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navigation">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="{{ URL::to('logout') }}">
                                    <i class="now-ui-icons objects_spaceship"></i>
                                    <p>
                                        <span class="d-lg-none d-md-block">Salir</span>
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- End Navbar -->
            <div class="panel-header panel-header-sm">
            </div>
            <div class="content">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            @yield('content')
                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer">
                <div class="container-fluid">
                    <div class="copyright">
                        &copy;
                        <script>
                            document.write(new Date().getFullYear())
                        </script>, Dr. Pie, Ecuador.
                    </div>
                </div>
            </footer>
        </div>
    </div>
</body>
<!--   Core JS Files   -->
<script src="{{ asset('/js/core/jquery.min.js') }}"></script>
<script src="{{ asset('/js/core/popper.min.js') }}"></script>
<script src="{{ asset('/js/core/bootstrap.min.js') }}"></script>
<script src="{{ asset('/js/plugins/perfect-scrollbar.jquery.min.js') }}"></script>
<!--  Notifications Plugin    -->
<script src="{{ asset('/js/plugins/bootstrap-notify.js') }}"></script>
<!-- Control Center for Now Ui Dashboard: parallax effects, scripts for the example pages etc -->
<script src="{{ asset('/js/now-ui-dashboard.js?v=1.0.0') }}"></script>
<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
<script src="{{ asset('/js/bootstrap-datepicker.min.js') }}"></script>

<script>
    function updateStatus(url, element) {
        var status = '/0';
        if(element.checked)
            status = '/1';
        url += status;
        $.ajax(url);

        return true;
    }

    function exitForm(url) {
        if(confirm("Está seguro(a) de cancelar?"))
            window.location = url;

        return true;
    }

    $('form').submit(function() {
        $('button').attr('disabled', 'true');
    });

    function deleteElement(form_element) {
        if(confirm("Está seguro(a) de eliminar el registro?"))
            $('#'+form_element).submit();
    }

    function addOption(table_id) {
        var table = $("#options_"+table_id);
        var tbody_size = table.find('tbody').children().length;
        var option_0 = document.getElementById('option_0_'+table_id);
        //prepare columns
        var option_input = '<input type="text" onkeypress="return enterKeyExistingOption(event)" value="'+option_0.value+'" class="form-control" name="options[]" placeholder="Opción">';
        var add_action = `
        <a onclick="removeOption('${table_id}','${tbody_size}');">
            <span class="now-ui-icons ui-1_simple-remove"></span>
        </a>
        `;
        //build table rows
        var new_row = $("<tr></tr>");
        new_row.append("<td>"+option_input+"</td>");
        new_row.append("<td>"+add_action+"</td>");
        table.find('tbody').append(new_row);
        document.getElementById('option_0_'+table_id).value = "";

        return true;
    }

    function enterKeyNewOption(e, table_id) {
        var key = (document.all) ? e.keyCode : e.which;
        if(key == 13) {
            //13 is enter/return key
            e.preventDefault();
            addOption(table_id);
        }

        return true;
    }

    function enterKeyExistingOption(e) {
        var key = (document.all) ? e.keyCode : e.which;
        if(key == 13) {
            //13 is enter/return key
            e.preventDefault();
        }

        return true;
    }

    function removeOption(table_id, option_id) {

    }

    function toggleOptionsPanel(element, table_id) {
        if(element.value == '3')
            $('#options_panel_'+table_id).slideUp('fast');
        else
            $('#options_panel_'+table_id).slideDown('fast');

        return true;
    }

    function viewResponses(visitor_id) {
        $("#responses_modal").modal();
        $.ajax({
            url: '{{ URL::to('visitors') }}'+'/'+visitor_id,
            method: 'GET',
            cache: false
        }).done(function( html ) {
            $( "#responses_modal .modal-body" ).html( html );
        });

        return true;
    }

    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd'
    });

    function generateExcel() {
        var form = $("#visitors_form");
        var queryString = form.serialize();
        var url = '{{ URL::to('visitors-excel') }}?'+queryString;
        window.location = url;
        
        return true;
    }
</script>
</html>