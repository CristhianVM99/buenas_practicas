@extends('layouts.main')
@section('title','Home')
@section('content')
    @include('components.main.banner')
    @include('components.main.experiencias')
    @include('components.main.descripcion')
    @include('components.main.biblioteca')
    @include('components.main.comunidad')
@endsection