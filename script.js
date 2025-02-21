const indicator=document.querySelector('.indicator');
const weak=document.querySelector('.weak');
const medium=document.querySelector('.medium');
const strong=document.querySelector('.strong');
const text=document.querySelector('.text');
const show=document.querySelector('.show');
const input=document.querySelector('input');

let regExpWeak=/[a-z]/;
let regExpMedium=/[\d+]/;
let regExpStrong=/.[!,@,#,$,%,^,~,&,*,(,),_,+]/;