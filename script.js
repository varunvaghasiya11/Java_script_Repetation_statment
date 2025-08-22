// 1 to 10
var i=1;
while(i<=10){
    document.write(i+" ");
    i++;
}
document.write("<br/>");
for(i=1;i<=10;i++){
    document.write(i+" ");
}
document.write("<br/>");


// even_odd
for(i=1;i<50;i++){
    if(i%2==0){
        document.write(i+" ");
    }
}
document.write("<br/>");

var i=1;
while(i<50){
    if(i%2==0){
        document.write(i+" ");
    }
    i++;
}
document.write("<br/>");


// sum of even
var sum=0;
for(i=1;i<=10;i++){
    if(i%2==0){
        sum+=i;
    }
}
document.write("sum of first 10 even number is :-"+sum);

document.write("<br/>");

var i=1;
while(i<=10){
    if(i%2==0){
        sum+=i;
    }
    i++;
}
document.write("sum of first 20 even number is :-"+sum);

document.write("<br/>");
// petterns
var i,j;
var a='';
for(i=1;i<=5;i++){
    for(j=1;j<=5;j++){
        a+=j;
    }
    document.write(a+"<br/>");
    a="";
}

document.write("<br/>");

var i,j;
var a='';
for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        a+=j;
    }
    document.write(a+"<br/>");
    a="";
}

document.write("<br/>");

for(i=1;i<=5;i++){
    for(j=i;j>=1;j--){
        a+=j;
    }
    document.write(a+"<br/>");
    a="";
}

document.write("<br/>");

for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        a+=i;
    }
    document.write(a+"<br/>");
    a="";
}

document.write("<br/>");

for(i=5;i>=1;i--){
    for(j=5;j>=i;j--){
        a+=j;
    }
    document.write(a+"<br/>");
    a="";
}

document.write("<br/>");

for(i=5;i>=1;i--){
    for(j=i;j<=5;j++){
        a+=j;
    }
    document.write(a+"<br/>");
    a="";
}

document.write("<br/>");

for(i=5;i>=1;i--){
    for(j=i;j<=5;j++){
        a+=i;
    }
    document.write(a+"<br/>");
    a="";
}

document.write("<br/>");

for(i=5;i>=1;i--){
    for(j=1;j<=i;j++){
        a+=j;
    }
    document.write(a+"<br/>");
    a="";
}

document.write("<br/>");

for(i=1;i<=5;i++){
    for(j=i;j<=5;j++){
        a+=j;
    }
    document.write(a+"<br/>");
    a="";
}

document.write("<br/>");

for(i=1;i<=5;i++){
    for(j=5;j>=i;j--){
        a+=i;
    }
    document.write(a+"<br/>");
    a="";
}

document.write("<br/>");

for(i=1;i<=5;i++){
    for(j=5;j>=i;j--){
        a+=j;
    }
    document.write(a+"<br/>");
    a="";
}

document.write("<br/>");

for(i=5;i>=1;i--){
    for(j=i;j>=1;j--){
        a+=j;
    }
    document.write(a+"<br/>");
    a="";
}

document.write("<br/>");

for(i=5;i>=1;i--){
    for(j=1;j<=i;j++){
        a+=i;
    }
    document.write(a+"<br/>");
    a="";
}

document.write("<br/>");

for(i=5;i>=1;i--){
    for(j=1;j<=i;j++){
        a+="*";
    }
    document.write(a+"<br/>");
    a="";
}

document.write("<br/>");

for(i=1;i<=5;i++){
    for(j=i;j>=1;j--){
        a+="*";
    }
    document.write(a+"<br/>");
    a="";
}

document.write("<br/>");

for(i=1;i<=5;i++){
    for(j=i;j>=1;j--){
        if(j%2==0){
            a+="0";
        }else{
            a+="1";
        }
    }
    document.write(a+"<br/>");
    a="";
}

document.write("<br/>");

for(i=5;i>=1;i--){
    for(j=i;j>=1;j--){
        if(j%2==0){
            a+="0";
        }else{
            a+="1";
        }
    }
    document.write(a+"<br/>");
    a="";
}

document.write("<br/>");

for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        if(j%2==0){
            a+="0";
        }else{
            a+="1";
        }
    }
    document.write(a+"<br/>");
    a="";
}

document.write("<br/>");

for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        if(j%2==0){
            a+="1";
        }else{
            a+="0";
        }
    }
    document.write(a+"<br/>");
    a="";
}

document.write("<br/>");










