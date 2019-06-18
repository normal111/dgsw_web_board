package kr.hs.dgsw.board_back.Service;

import kr.hs.dgsw.board_back.Domain.Post;
import kr.hs.dgsw.board_back.Domain.PostMapper;
import kr.hs.dgsw.board_back.Domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostMapper postMapper;

    @Override
    public List<Post> findAll() {
        return postMapper.findAll();
    }

    @Override
    public Post findById(Long id) {
        return postMapper.findById(id);
    }

    @Override
    public List findByUserId(Long user_id) {
        return postMapper.findByUserId(user_id);
    }

    @Override
    public Long add(Post post) {
        return postMapper.add(post);
    }

    @Override
    public int modify(Post post) {
        return postMapper.modify(post);
    }

    @Override
    public int deleteById(Long id) {
        return postMapper.deleteById(id);
    }


}
