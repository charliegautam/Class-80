student_array=[];
function submit(){
    var display_student_array=[];
    for(var i=1;i<=4;i++){
        var student_name=document.getElementById("name_of_the_student_"+i).value;
        console.log(student_name);
        student_array.push(student_name);
    }
    console.log(student_array);
    var length_of_student_array=student_array.length;
    console.log(length_of_student_array);
    for(var a=0;a<length_of_student_array;a++){
        display_student_array.push("<h4>Name- "+student_array[a]+"</h4>");
        console.log(display_student_array);
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove_commas=display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    student_array.sort();
    console.log(student_array);
    var display_student_array_sorting=[];
    var length_of_student_array=student_array.length;
    console.log(length_of_student_array);
    for(var a=0;a<length_of_student_array;a++){
        display_student_array_sorting.push("<h4>Name- "+student_array[a]+"</h4>");
        console.log(display_student_array_sorting);
    }
    var remove_commas=display_student_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}