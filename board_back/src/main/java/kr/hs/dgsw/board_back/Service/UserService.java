package kr.hs.dgsw.board_back.Service;

import kr.hs.dgsw.board_back.Domain.User;

import java.util.List;

public interface UserService {

    List<User> findAll();

    User findById(Long id);

    Long add(User user);

    int modify(User user);

    int deleteById(Long id);

}
