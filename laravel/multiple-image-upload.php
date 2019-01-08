<?php
 $images = array();
        if ($request->hasFile('field_name')) {
            foreach ($request->field_name as $image) {

                $name = $image->getClientOriginalName();
                $image->storeAs('public/folder_name', $name);
                $images[] = $name;

            }
        }

