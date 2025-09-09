

    const doSomething = () => {
        const a = 10, b = 0;

        if (b === 0 ) {
            throw new Error("Lỗi chia cho 0");
        }
        return a / b;
    }

  

    try {
            doSomething();
        } catch (error) {
            console.log("=== BẮT ĐỦU CATCH ===");
            console.log("có lỗi xảy ra", error.message); // Chỉ lấy message
            console.log("=== KẾT THÚC CATCH ===");
        } finally {
            console.log("=== FINALLY CHẠY ===");
            console.log("Done");
            console.log("=== FINALLY KẾT THÚC ===");
    }