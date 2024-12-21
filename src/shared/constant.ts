class Constant {
    // variables
    public success: string = '';
    public error: string = '';
    
  
    // Static methods
    public static toaster(user: string): void {
      console.log(`${user}, Toaster is working!`);
    }
  }