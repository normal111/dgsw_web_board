package kr.hs.dgsw.board_back.Service;

import kr.hs.dgsw.board_back.Domain.Post;

import java.util.List;

public interface PostService {

    List findAll();

    Post findById(Long id);

    List findByUserId(Long user_id);

    Long add(Post post);

    int modify(Post post);

    int deleteById(Long id);

}
