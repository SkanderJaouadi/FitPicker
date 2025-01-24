<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ClothesController extends Controller
{
    /*get all clothes */
    public function index(){
        $clothes = clothe::all();
        return($clothes)
    }

    /*get by id */
    public function getclothe($id){
        $clothe = clothe::find($id);

        if(!$clothe){
            return ('error')
        }
        return($clothe)
    }

    /*update attribue */
    public function updatecolor($id,$color){
        $clothe = $this->getclothe($id);
        $clothe->color = $color;
        $clothe->save();
    }

    /*update attribue */
    public function updatetype($id,$type){
        $clothe = $this->getclothe($id);
        $clothe->type = $type;
        $clothe->save();
    }

    /*update attribue */
    public function updatesize($id,$size){
        $clothe = $this->getclothe($id);
        $clothe->size = $size;
        $clothe->save();
    }

    /*update attribue */
    public function updateoccasion($id,$occasion){
        $clothe = $this->getclothe($id);
        $clothe->occasion = $occasion;
        $clothe->save();
    }

    /*update attribue */
    public function updatetag($id,$tag){
        $clothe = $this->getclothe($id);
        $clothe->tag = $tag;
        $clothe->save();
    }

    /*update attribue */
    public function updatedescription($id,$description){
        $clothe = $this->getclothe($id);
        $clothe->description = $description;
        $clothe->save();
    }

    /*update attribue */
    public function updateimage_url($id,$image_url){
        $clothe = $this->getclothe($id);
        $clothe->image_url = $image_url;
        $clothe->save();
    }
    
    /*delete clothe */
    public function deleteclothe($id){
        $clothe = $this->getclothe($id);
        $clothe->delete();
    }
}
