<table class="table table-responsive table-condensed table-striped table-bordered" id="archivos-table">
    <thead>
        <th>Mayusculas</th>
        <th>Usuario</th>
        <!-- <th colspan="3">Action</th> -->
    </thead>
    <tbody>
    @foreach($archivos as $archivo)
        <tr>
            <td>{!! $archivo->mayusculas !!}</td>
            <td>{!! $archivo->userCreator->name !!}</td>
            <td>
                {!! Form::open(['route' => ['archivos.destroy', $archivo->id_archivo], 'method' => 'delete']) !!}
                <div class='btn-group'>
                    <!-- <a href="{!! route('archivos.show', [$archivo->id_archivo]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                    <a href="{!! route('archivos.edit', [$archivo->id_archivo]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a> -->
                    
                    @if ( Auth::user()->id == $archivo->id_user )
                        {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                    @endif
                </div>
                {!! Form::close() !!}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>