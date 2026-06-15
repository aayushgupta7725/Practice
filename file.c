#include <stdio.h>
#include <stdlib.h>
void main()
{
    int requests[]={98,183,37,122,14,124,65,67};
    int n=8, req, current=53, tracks=200, i, j, temp, total=0;
    for(i=1;i<n;i++)
    {
        j=i-1;
        temp=requests[i];
        while((j>=0)&&(requests[j]>temp))
        {
            requests[j+1]=requests[j];
            j=j-1;
        }
        requests[j+1]=temp;
    }
    total=total+abs(current-requests[0])+abs(requests[0]-requests[n-1]);
    for(i=0;i<n;i++)
    {
        if(requests[i]>current)
        {
            req=i;
            break;
        }
    }
    total=total+abs(requests[n-1]-requests[req]);
    printf("%d",total);

}
