using Microsoft.ReactNative.Managed;



[ReactModule]
public class DemoModule
{
    [ReactMethod("add")]
    public int Add(int firstnum, int secnum)
    {
        return firstnum + secnum;
    }

    [ReactMethod("sub")]
    public int Subtract(int firstnum, int secnum)
    {
        return firstnum - secnum;
    }

    [ReactMethod("mul")]
    public int Multiply(int firstnum, int secnum)
    {
        return firstnum * secnum;
    }

    [ReactMethod("divide")]
    public int Divide(int firstnum, int secnum)
    {
        if (secnum != 0)
        {
            return firstnum / secnum;
        }
        else
        {
            // Handle division by zero
            return 0; // You may want to handle this differently based on your requirements
        }
    }
}





