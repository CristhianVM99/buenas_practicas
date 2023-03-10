@props(['disabled' => false])

<textarea {!! $attributes->merge([
    'class' => 'rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 ounded-md shadow-sm',
    'cols' => '3'
    ]) !!}>{{ $slot }}
</textarea>