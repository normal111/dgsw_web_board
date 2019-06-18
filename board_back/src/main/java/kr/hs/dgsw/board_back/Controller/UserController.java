package kr.hs.dgsw.board_back.Controller;

import kr.hs.dgsw.board_back.Domain.User;
import kr.hs.dgsw.board_back.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user/getAll")
    public List getAll() {
        return this.userService.findAll();
    }

    @GetMapping("/user/get/{id}")
    public User getUser(@PathVariable Long id) {
        return this.userService.findById(id);
    }

    @PostMapping("/user/insert")
    public Long insert(@RequestBody User user) {
        return this.userService.add(user);
    }

    @PutMapping("/user/update")
    public int update(@RequestBody User user) {
        return this.userService.modify(user);
    }

    @DeleteMapping("/user/delete/{id}")
    public int delete(@PathVariable Long id) {
        return this.userService.deleteById(id);
    }

}
