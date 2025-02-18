<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ClothesController extends Controller
{
    /*get all clothes */
    public function index(){
        $clothes = clothe::all();
        return($clothes);
    }

    /*get by id */
    public function getclothe($id){
        $clothe = clothe::find($id);

        if(!$clothe){
            return ('error');
        }
        return($clothe);
    }

    /* get color */
    public function getcolor($id,$color){
        $clothe = $this->getclothe($id);
        $color = $clothe->color ;
        return($color);
    }

    /*update color */
    public function updatecolor($id,$color){
        $clothe = $this->getclothe($id);
        $clothe->color = $color;
        $clothe->save();
    }

    /*get type */
    public function updatetype($id,$type){
        $clothe = $this->getclothe($id);
        $type = $clothe->type;
        return($type);
    }

    /*update type */
    public function updatetype($id,$type){
        $clothe = $this->getclothe($id);
        $clothe->type = $type;
        $clothe->save();
    }

    /*get size */
    public function updatesize($id,$size){
        $clothe = $this->getclothe($id);
        $size = $clothe->size;
        return($size);
    }

    /*update size */
    public function updatesize($id,$size){
        $clothe = $this->getclothe($id);
        $clothe->size = $size;
        $clothe->save();
    }

    /*get occasion*/
    public function updatesize($id,$occasion){
        $clothe = $this->getclothe($id);
        $occasion = $clothe->occasion;
        return($occasion);
    }

    /*update occasion */
    public function updateoccasion($id,$occasion){
        $clothe = $this->getclothe($id);
        $clothe->occasion = $occasion;
        $clothe->save();
    }

    /*get  tag*/
    public function updatesize($id,$tag){
        $clothe = $this->getclothe($id);
        $tag = $clothe->tag;
        return($tag);
    }

    /*update tag */
    public function updatetag($id,$tag){
        $clothe = $this->getclothe($id);
        $clothe->tag = $tag;
        $clothe->save();
    }

    /*get description */
    public function updatesize($id,$description){
        $clothe = $this->getclothe($id);
        $description = $clothe->description;
        return($description);
    }

    /*update description*/
    public function updatedescription($id,$description){
        $clothe = $this->getclothe($id);
        $clothe->description = $description;
        $clothe->save();
    }

    /*get image_url */
    public function updatesize($id,$image_url){
        $clothe = $this->getclothe($id);
        $image_url = $clothe->image_url;
        return($image_url);
    }

    /*update image_url */
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
