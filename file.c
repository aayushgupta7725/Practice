#include<stdio.h>
void merge_sort(int arr[], int low, int high)
{   int mid;
    if(low<high)
    {
        mid=(low+high)/2;
        merge_sort(arr,low,mid);
        merge_sort(arr,mid+1,high);
        merge(arr,low,mid,high);
    }
}
void merge(int arr[], int low, int mid, int high)
{
    int n1=mid-low+1, n2=high-mid,i,j,k;
    int left[n1], right[n2];
    for(i=0;i<n1;i++)
    {left[i]=arr[low+i];}
    for(j=0;j<n2;j++)
    {right[j]=arr[mid+1+j];}
    i=0;
    j=0;
    k=low;
    while((i<n1)&&(j<n2))
    {
        if(left[i]<=right[j])
        {arr[k++]=left[i++];}
        else
        {arr[k++]=right[j++];}
    }
    while(i<n1)
    arr[k++]=left[i++];
    while(j<n2)
    arr[k++]=right[j++];
}
void main()
{   int n=5,i;
    int arr[5]={3,5,62,43,1};
    merge_sort(arr,0,5);
    for(i=0;i<n;i++)
    {printf("%d ", arr[i]);}
}