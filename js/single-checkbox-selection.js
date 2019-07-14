// <!-- For Single Checkbox -->
$('.product-list').on('change', function() {
    $('.product-list').not(this).prop('checked', false);
});

// #Example 
<label class="checkbox-inline">
   <input type="checkbox" class="product-list">                                                
</label>

{/* Need jquery library */}
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
