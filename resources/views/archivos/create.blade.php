@extends('adminlte::layouts.app')

@section('main-content')
    <section class="content-header">
        <h1>
            Archivos
        </h1>
    </section>
    <div class="content">
        @include('adminlte-templates::common.errors')
        <div class="box box-primary">

            <div class="box-body">
                <div class="row">
                    {!! Form::open(['route' => 'archivos.store','files'=>true]) !!}

                        @include('archivos.fields')

                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
@endsection
