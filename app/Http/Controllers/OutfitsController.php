<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OutfitsController extends Controller
{
    /*get all outfits */
    public function getoutfits(){
        $outfits = outfit::all();
        return($outfits)
    }

    /*get outfit by id*/
    public function getoutfit($id){
        $outfit = outfit::find($id);
        if(!$outfit){
            return('error');
        }
    }
    
    /*delete outfit */
    public function deleteoutfit($id){
        $outfit = outfit::find($id);
        if(!$outfit){
            return('error')
        }
        else{
            $outfit->delete();
        }
    }
}
