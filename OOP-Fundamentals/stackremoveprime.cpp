#include <iostream>
#include <stack>
#include<cmath>
using namespace std;
bool prime(int n){
    if ( n<=1)return false;
    for (int i=2;i<=sqrt(n);i++){
        if(n %i==0)return false;
    }
    return true;
}
stack<int> removeprime(stack<int>s){
    stack<int>l;
    while(!s.empty()){
        if(!prime(s.top())){
            l.push(s.top());
        }
        s.pop();
    }
    while(!l.empty()){
        s.push(l.top());
        l.pop();
    }
    return s;
}
void affichie(stack<int>s){
    while(!s.empty()){
        cout<<s.top()<<endl;
        s.pop();
    }
}
int main(){
    stack<int>s;
    stack<int>k;
    int n;
    int x;
    cout<<"enter the size of the stack";
    cin>>n;
    cout<<"enter the element of the stack"<<endl;
    for(int i=0;i<n;i++){
        cin>>x;
        s.push(x);
    }
    k=removeprime(s);
    affichie(k);
    return 0;
}