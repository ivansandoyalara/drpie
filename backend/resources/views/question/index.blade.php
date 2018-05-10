@extends('template')

@section('title', 'Formulario')

@section('content')
<div class="card-header">
    <h4 class="card-title">Formulario</h4>
</div>
<div class="card-body">
    @if(session('ok'))
    <div class="alert alert-success" role="alert">
        <button type="button" aria-hidden="true" class="close" data-dismiss="alert">
            <i class="now-ui-icons ui-1_simple-remove"></i>
        </button>
        <span><b>Transacción exitosa</b></span>
    </div>
    @endif
    <div class="row">
        <div class="col-md-12 new-question">
            <form action="{{ URL::to('questions') }}" method="POST">
                {{ csrf_field() }}
                <div class="form-grpou row">
                    <label for="question" class="col-sm-2 col-form-label">Nueva pregunta</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" name="question" id="question" placeholder="Nueva pregunta">
                    </div>
                    <div class="col-sm-2">
                        <select name="type" id="type" class="form-control">
                            <option value="1">Opción única</option>
                            <option value="2">Multi-opción</option>
                            <option value="3">Campo abierto</option>
                        </select>
                    </div>
                    <div class="col-sm-2">
                        <button type="submit" class="btn btn-primary">AGREGAR</button>
                    </div>
                </div>
            </form>
        </div>

        @foreach($questions as $question)
        <div class="col-md-12 question-item">
            <form action="{{ URL::to('questions/'.$question->id) }}" method="POST">
                {{ csrf_field() }}
                {{ method_field('PUT') }}
                <div class="form-group row">
                    <label for="question" class="col-sm-2 col-form-label">Pregunta</label>
                    <div class="col-sm-6">
                    <input type="text" class="form-control" name="question" id="question" placeholder="Pregunta" value="{{ $question->question }}">
                    </div>
                    <div class="col-sm-3">
                        <select name="type" id="type" class="form-control"
                            onchange="toggleOptionsPanel(this, '{{ $question->id }}');">
                            <option value="1" @if($question->type == '1') selected @endif>Opción única</option>
                            <option value="2" @if($question->type == '2') selected @endif>Multi-opción</option>
                            <option value="3" @if($question->type == '3') selected @endif>Campo abierto</option>
                        </select>
                    </div>
                </div>
                @if($question->type != '3')
                <div class="row" id="options_panel_{{ $question->id }}">
                    <div class="col-sm-2">
                        <span></span>
                    </div>
                    <div class="col-sm-9">
                        <div class="table-responsive">
                            <table class="table" id="options_{{ $question->id }}">
                                <thead>
                                    <tr>
                                        <th class="col-md-5">Opciones</th>
                                        <th class="col-md-4"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="text" class="form-control" placeholder="Agregar nueva opción" id="option_0_{{ $question->id }}" onkeypress="return enterKeyNewOption(event, '{{ $question->id }}');">
                                        </td>
                                        <td>
                                            <a onclick="addOption('{{ $question->id }}');">
                                                <span class="now-ui-icons ui-1_simple-add"></span>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php $options_counter = 1; ?>
                                    @foreach($question->options as $option)
                                    <tr>
                                        <td>
                                        <input type="text" class="form-control" name="options[]" placeholder="Opción" value="{{ $option->value }}" onkeypress="return enterKeyExistingOption(event)">
                                        </td>
                                        <td>
                                            <a onclick="removeOption('{{ $question->id }}','{{ $options_counter }}');">
                                                <span class="now-ui-icons ui-1_simple-remove"></span>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php $options_counter ++; ?>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                @endif
                <div class="row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-9">
                        <button type="submit" class="btn btn-primary">ACTUALIZAR PREGUNTA @if($question->type != '3') Y OPCIONES @endif</button>
                        <button type="button" onclick="confirmDelete('{{ $question->id }}')" class="btn btn-default">ELIMINAR PREGUNTA @if($question->type != '3') Y OPCIONES @endif</button>
                    </div>
                </div>
            </form>
        <form action="{{ URL::to('questions/'.$question->id) }}" method="POST" id="delq{{ $question->id }}">
            {{ csrf_field() }}
            {{ method_field('DELETE') }}
        </form>
        </div>
        @endforeach
    </div>
</div>
<script>
    function confirmDelete(question_id) {
        if(confirm("Está seguro(a) de eliminar la pregunta?")) {
            $('#delq'+question_id).submit()
        }
    }
</script>
@endsection