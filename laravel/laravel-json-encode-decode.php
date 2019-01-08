    //In Controller
        $other_info = json_encode([
            'field_name'        => $request->field_name,
        ]);
        
    //In Blade Template
    <?php $other_info = json_decode(other_info, true) ?>
                                    <?php $jersey_size = $other_info['field_name']; ?>
                                                <label>Label Name</label> <br>
                                                <label class="checkbox-inline">
                                                    <input type="checkbox"  value="M"name="field_name"
                                                    {{ ($field_name == 'statement') ? 'checked' : '' }}>
                                          
                                                </label>

              

#Example 

    //In Controller
        $other_info = json_encode([
            'jersey_size'       => $request->jersey_size
        ]);
        
    //In Blade Template
    <?php $other_info = json_decode(auth()->user()->other_info, true) ?>
                                    <?php $jersey_size = $other_info['jersey_size']; ?>
                                                <label>Jersey Size</label> <br>
                                                <label class="checkbox-inline">
                                                    <input type="checkbox" value="M"name="jersey_size"
                                                    {{ ($jersey_size == 'M') ? 'checked' : '' }}>
                                                    M
                                                </label>
                                      

                        
