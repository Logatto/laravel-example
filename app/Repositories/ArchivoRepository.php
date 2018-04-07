<?php

namespace App\Repositories;

use App\Models\Archivo;
use InfyOm\Generator\Common\BaseRepository;

class ArchivoRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        // 'mayus'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Archivo::class;
    }
}
