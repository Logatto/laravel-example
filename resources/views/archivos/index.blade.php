@extends('adminlte::layouts.app')

@section('main-content')
    <section class="content-header">
        <h1 class="pull-left">Archivos</h1>
        <h1 class="pull-right">
           <a class="btn btn-primary pull-right" style="margin-top: -10px;margin-bottom: 5px" href="{!! route('archivos.create') !!}">Importar TXT</a>
        </h1>
    </section>
    <div class="content">
        <div class="clearfix"></div>
       
        @include('flash::message')

        <div class="clearfix"></div>
        <div class="box box-primary">
            <div class="box-body">
                    @include('archivos.table')
            </div>
        </div>
    </div>
@endsection

