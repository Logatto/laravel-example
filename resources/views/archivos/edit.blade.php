@extends('adminlte::layouts.app')

@section('main-content')
    <section class="content-header">
        <h1>
            Artista
        </h1>
   </section>
   <div class="content">
       @include('adminlte-templates::common.errors')
       <div class="box box-primary">
           <div class="box-body">
               <div class="row">
                   {!! Form::model($artista, ['route' => ['artistas.update', $artista->id], 'method' => 'patch']) !!}

                        @include('artistas.fields')

                   {!! Form::close() !!}
               </div>
           </div>
       </div>
   </div>
@endsection