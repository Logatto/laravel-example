<!-- Nombre Field -->
<!-- <div class="form-group col-sm-6">
    {!! Form::label('nombre', 'Nombre:') !!}
    {!! Form::text('nombre', null, ['class' => 'form-control']) !!}
</div> -->

<div class="form-group col-sm-6">
    {{ Form::file('thefile') }}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('archivos.index') !!}" class="btn btn-default">Cancel</a>
</div>
