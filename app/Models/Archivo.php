<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Cancion
 * @package App\Models
 * @version April 8, 2017, 3:26 am UTC
 */
class Archivo extends Model
{
    use SoftDeletes;

    public $table = 'archivos';
    protected $primaryKey = 'id_archivo';

    protected $dates = ['deleted_at'];


    public $fillable = [
        'mayusculas',
        'id_user'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'mayusculas' => 'string',
        'id_user' => 'integer' 
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        // 'mayusculas' => 'required',
        // 'id_user' => 'required'
    ];

    public function userCreator(){
        return $this->belongsTo('App\User','id_user');
    }

    
}
