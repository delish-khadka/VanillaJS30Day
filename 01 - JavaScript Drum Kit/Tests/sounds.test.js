const { data, handleKeyPress, play } = require("./testscript");
describe("Key-to-Sound Mapping", () => {
  test("Correctly maps keys to sounds", () => {
    expect(data.a).toBe("sounds/clap.wav");
    expect(data.s).toBe("sounds/hihat.wav");
  });

  test("Returns undefined for unmapped keys", () => {
    expect(data.z).toBeUndefined();
  });
});

describe("Key Press Handling", () => {
  test("Logs sound not found for unmapped keys", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    handleKeyPress({ key: "z" });
    expect(consoleSpy).toHaveBeenCalledWith("Sound not found for key:", "z");
    consoleSpy.mockRestore();
  });

  test("Calls play for mapped keys", () => {
    const mockPlay = jest.fn();
    global.Audio = jest.fn().mockImplementation(() => ({ play: mockPlay }));
    handleKeyPress({ key: "a" });
    expect(mockPlay).toHaveBeenCalled();
  });
});

describe("Play Function", () => {
  test("Plays the correct sound", () => {
    const mockPlay = jest.fn();
    global.Audio = jest.fn().mockImplementation(() => ({ play: mockPlay }));
    play("sounds/clap.wav");
    expect(global.Audio).toHaveBeenCalledWith("sounds/clap.wav");
    expect(mockPlay).toHaveBeenCalled();
  });
});
